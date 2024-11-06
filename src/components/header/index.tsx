'use client';
import * as React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './styles.module.css';
import { useHeader } from './hooks';


export const Header: React.FC = () => {
    const { notificationCount, anchorElUser, handleOpenMenu, handleCloseMenu, pages, settings } = useHeader();

    return (
        <header className={styles.header}>
            <div className={styles.toolbar}>
                <div className={styles.iconButton}>
                    <Link href={'/'}>
                        <Image src={'/images/header.png'} alt={'header logo'} width={146} height={64} />
                    </Link>
                </div>
                <div className={styles.listPage}>
                    {pages.map((page, idx) => (
                        <Link href={page.url} key={idx + page.text}>
                            <div className={styles.pageItem}>
                                <Image src={page.icon} alt={page.text} width={32} height={32} />
                                <span className={styles.pageText}>{page.text}</span>
                            </div>
                        </Link>
                    ))}
                    <Link href={'/notifications'}>
                        <div className={styles.pageItem}>
                            <div className={styles.badge}>
                                <Image src={'/images/icons/icon_info.png'} alt={"icon info"} width={32} height={32} />
                                <span className={styles.badgeContent}>{notificationCount}</span>
                            </div>
                            <span className={styles.pageText}>お知らせ</span>
                        </div>
                    </Link>
                </div>
                <div className={styles.menuContainer}>
                    <div className={styles.iconButton} onClick={handleOpenMenu}>
                        <Image src={'/images/icons/icon_menu.png'} alt={'menu icon'} width={32} height={32} />
                    </div>
                    {anchorElUser && (
                        <div className={styles.menu} onMouseLeave={handleCloseMenu}>
                            {settings.map((setting, idx) => (
                                <Link key={idx + setting.url} href={setting.url}>
                                    <div className={styles.menuItem} onClick={handleCloseMenu}>
                                        {setting.text}
                                    </div>
                                </Link>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </header>
    );
};