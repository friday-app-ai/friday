import { Toaster } from "sonner";

export default function AuthLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body>
                {children}
                <Toaster closeButton={true} />
            </body>
        </html>
    );
}