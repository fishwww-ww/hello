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
          <a
            href={beianLink}
            target="_blank"
            rel="noopener noreferrer"
            className="footer-beian-link"
          >
            {beianNumber}
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
