"""Backend API tests for NyaInfo landing page."""
import uuid


# ---------- Health ----------
class TestHealth:
    def test_root(self, api_client, base_url):
        r = api_client.get(f"{base_url}/api/")
        assert r.status_code == 200
        data = r.json()
        assert data.get("service") == "nyainfo"
        assert "message" in data

    def test_health(self, api_client, base_url):
        r = api_client.get(f"{base_url}/api/health")
        assert r.status_code == 200
        assert r.json().get("status") == "ok"


# ---------- Contact ----------
class TestContact:
    def test_submit_valid_contact_persists(self, api_client, base_url):
        unique = uuid.uuid4().hex[:8]
        payload = {
            "name": f"TEST_User_{unique}",
            "email": f"test_{unique}@example.com",
            "company": "TEST_Co",
            "subject": "TEST_Subject",
            "message": "TEST_Hello, this is a test message from automated suite.",
        }
        r = api_client.post(f"{base_url}/api/contact", json=payload)
        assert r.status_code == 200, r.text
        data = r.json()
        assert data.get("success") is True
        assert "message" in data and isinstance(data["message"], str)
        assert "id" in data and isinstance(data["id"], str) and len(data["id"]) > 0

        contact_id = data["id"]

        # Verify persistence via GET /api/contact (sorted desc, freshest first)
        r2 = api_client.get(f"{base_url}/api/contact")
        assert r2.status_code == 200
        rows = r2.json()
        assert isinstance(rows, list)
        ids = [c["id"] for c in rows]
        assert contact_id in ids, "Submitted contact not found in list"

        # Find the matching contact and validate fields
        match = next((c for c in rows if c["id"] == contact_id), None)
        assert match is not None
        assert match["name"] == payload["name"]
        assert match["email"] == payload["email"]
        assert match["company"] == payload["company"]
        assert match["subject"] == payload["subject"]
        assert match["message"] == payload["message"]

    def test_submit_minimal_required_fields(self, api_client, base_url):
        unique = uuid.uuid4().hex[:8]
        payload = {
            "name": f"TEST_Min_{unique}",
            "email": f"min_{unique}@example.com",
            "message": "Minimal message",
        }
        r = api_client.post(f"{base_url}/api/contact", json=payload)
        assert r.status_code == 200, r.text
        body = r.json()
        assert body["success"] is True
        assert body["id"]

    def test_submit_missing_name(self, api_client, base_url):
        r = api_client.post(
            f"{base_url}/api/contact",
            json={"email": "x@y.com", "message": "hi"},
        )
        assert r.status_code == 422

    def test_submit_missing_email(self, api_client, base_url):
        r = api_client.post(
            f"{base_url}/api/contact",
            json={"name": "X", "message": "hi"},
        )
        assert r.status_code == 422

    def test_submit_missing_message(self, api_client, base_url):
        r = api_client.post(
            f"{base_url}/api/contact",
            json={"name": "X", "email": "x@y.com"},
        )
        assert r.status_code == 422

    def test_submit_invalid_email(self, api_client, base_url):
        r = api_client.post(
            f"{base_url}/api/contact",
            json={"name": "X", "email": "not-an-email", "message": "hi"},
        )
        assert r.status_code == 422

    def test_submit_empty_name(self, api_client, base_url):
        r = api_client.post(
            f"{base_url}/api/contact",
            json={"name": "", "email": "x@y.com", "message": "hi"},
        )
        assert r.status_code == 422

    def test_list_contacts_sorted_desc(self, api_client, base_url):
        # Submit two new contacts and ensure the latest appears earlier than the first
        u1 = uuid.uuid4().hex[:8]
        api_client.post(
            f"{base_url}/api/contact",
            json={"name": f"TEST_S1_{u1}", "email": f"s1_{u1}@e.com", "message": "first"},
        )
        u2 = uuid.uuid4().hex[:8]
        r = api_client.post(
            f"{base_url}/api/contact",
            json={"name": f"TEST_S2_{u2}", "email": f"s2_{u2}@e.com", "message": "second"},
        )
        latest_id = r.json()["id"]

        r2 = api_client.get(f"{base_url}/api/contact?limit=50")
        assert r2.status_code == 200
        rows = r2.json()
        # Latest (second) should come before first in the list
        ids = [c["id"] for c in rows]
        assert latest_id in ids
        # Validate created_at is in non-increasing order
        timestamps = [c["created_at"] for c in rows]
        assert timestamps == sorted(timestamps, reverse=True)

    def test_list_contacts_excludes_mongo_id(self, api_client, base_url):
        r = api_client.get(f"{base_url}/api/contact?limit=5")
        assert r.status_code == 200
        for c in r.json():
            assert "_id" not in c
