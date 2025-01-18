import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Hàng vạn lời yêu không bằng một chiều anh đưa em đi uống bia.",
  description:'Đôi khi, tình yêu không nằm ở những lời hoa mỹ hay món quà xa xỉ, mà được gói gọn trong những khoảnh khắc đời thường nhưng chân thật. Một buổi chiều, khi ánh nắng dịu nhẹ đổ dài trên con phố, anh và em cùng nhau ngồi lại, nhấp những ngụm bia mát lạnh, chia sẻ những câu chuyện nhỏ bé nhưng ý nghĩa. Hạnh phúc thật sự là cảm giác bình yên khi có người cùng lắng nghe, cùng thấu hiểu, và cùng tận hưởng những điều giản dị nhất trong cuộc sống. Có lẽ, hàng vạn câu yêu thương cũng không thể diễn tả hết ý nghĩa của một chiều như thế. Vì vậy, đôi khi, chỉ cần có nhau, mọi thứ đều trở nên trọn vẹn.'
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
}

export default function RootLayout({children}: Readonly<{children: React.ReactNode;}>) {
  
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
