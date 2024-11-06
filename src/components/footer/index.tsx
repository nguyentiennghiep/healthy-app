import * as React from 'react';
import Link from 'next/link';
import styles from './styles.module.css';
import { useFooter } from './hooks';

export const Footer: React.FC = () => {
    const { footerLinks } = useFooter();

    return (
        <footer className={styles.footer}>
            <div className={styles.footerContent}>
                {footerLinks.map((link, idx) => (
                    <Link key={idx + link.text} href={link.href}>
                        <div className={styles.footerItem}>
                            <span className={styles.footerText}>{link.text}</span>
                        </div>
                    </Link>
                ))}
            </div>
        </footer>
    );
};