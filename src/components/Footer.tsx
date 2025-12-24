import "./Footer.css";

interface FooterProps {
  companyName?: string;
  beianNumber?: string;
  beianLink?: string;
  startYear?: number;
}

function Footer({
  companyName = "版权所有",
  beianNumber = "赣ICP备2025077493号-1",
  beianLink = "https://beian.miit.gov.cn/",
  startYear = new Date().getFullYear(),
}: FooterProps) {
  const currentYear = new Date().getFullYear();
  const yearText =
    currentYear === startYear ? `${startYear}` : `${startYear}-${currentYear}`;

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-copyright">
          <span>Copyright © {yearText}</span>
          <span className="footer-separator">|</span>
          <span>{companyName}</span>
        </div>
        <div className="footer-beian">
          {/* 工信部ICP备案 */}
          <a
            href={beianLink}
            target="_blank"
            rel="noopener noreferrer"
            className="footer-beian-link"
          >
            {beianNumber}
          </a>

          {/* 公安备案，带图标 */}
          <a
            href="https://www.beian.gov.cn/portal/registerSystemInfo?recordcode=36082502000177"
            rel="noreferrer"
            target="_blank"
            className="footer-beian-link footer-beian-police"
          >
            <img
              src={"beiantubiao.png"}
              alt="公安备案图标"
              className="footer-beian-logo"
            />
            <span>赣公网安备 36082502000177号</span>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
