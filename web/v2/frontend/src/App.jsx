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
                theme="light"
                position="top-right"
                richColors
                toastOptions={{
                    style: {
                        background: "#ffffff",
                        border: "1px solid hsl(var(--border))",
                        color: "hsl(var(--foreground))",
                    },
                }}
            />
        </div>
    );
}

export default App;
