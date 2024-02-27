import "./globals.css";
import StyledComponentsRegistry from "@/app/registry";

export const metadata = {
    title: "렌트카 서비스",
    description: "Next.js로 구현한 렌트카 서비스 입니다.",
};

export default function RootLayout({children}) {
    return (
        <html lang="ko">
        <body suppressHydrationWarning={true}>
        <StyledComponentsRegistry>
                {children}
        </StyledComponentsRegistry>
        </body>
        </html>
    );
}
