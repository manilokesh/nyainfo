import os
import pytest
import requests
from dotenv import load_dotenv
from pathlib import Path

# Load frontend env to get the public URL
load_dotenv(Path(__file__).parent.parent.parent / "frontend" / ".env")


@pytest.fixture(scope="session")
def base_url():
    url = os.environ.get("REACT_APP_BACKEND_URL")
    if not url:
        pytest.skip("REACT_APP_BACKEND_URL not configured")
    return url.rstrip("/")


@pytest.fixture
def api_client():
    s = requests.Session()
    s.headers.update({"Content-Type": "application/json"})
    return s
