import "@/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "@/components/ui/sonner";
import Landing from "@/pages/Landing";

function App() {
    return (
        <div className="App" data-testid="app-root">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Landing />} />
                </Routes>
            </BrowserRouter>
            <Toaster
                theme="dark"
                position="top-right"
                richColors
                toastOptions={{
                    style: {
                        background: "rgba(15, 23, 42, 0.95)",
                        border: "1px solid rgba(59, 130, 246, 0.3)",
                        color: "#ffffff",
                    },
                }}
            />
        </div>
    );
}

export default App;
