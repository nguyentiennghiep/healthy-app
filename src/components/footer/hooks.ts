export const useFooter = () => {
    const footerLinks: FooterLink[] = [
        { href: '#', text: '会員登録' },
        { href: '#', text: '運営会社' },
        { href: '#', text: '利用規約' },
        { href: '#', text: '個人情報の取扱について' },
        { href: '#', text: '特定商取引法に基づく表記' },
        { href: '#', text: 'お問い合わせ' },
    ];

    return { footerLinks };
};

interface FooterLink {
    href: string;
    text: string;
}
