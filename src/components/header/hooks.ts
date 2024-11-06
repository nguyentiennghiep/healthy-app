import { useState, MouseEvent } from 'react';

export const useHeader = () => {
    const pages: Page[] = [
        { icon: '/images/icons/icon_memo.png', text: '自分の記録', url: '/records' },
        { icon: '/images/icons/icon_challenge.png', text: 'チャレンジ', url: '/challenge' }
    ];

    const settings: Setting[] = [
        { text: '自分の記録', url: '/records' },
        { text: '体重グラフ', url: '/weight-chart' },
        { text: '目標', url: '/target' },
        { text: '選択中のコース', url: '/courses' },
        { text: 'コラム一覧', url: '/columns' },
        { text: '設定', url: '/settings' }
    ];
    const [notificationCount] = useState<number>(1);
    const [anchorElUser, setAnchorElUser] = useState<HTMLElement | null>(null);

    const handleOpenMenu = (event: MouseEvent<HTMLElement>) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseMenu = () => {
        setAnchorElUser(null);
    };

    return {
        notificationCount,
        anchorElUser,
        handleOpenMenu,
        handleCloseMenu,
        pages,
        settings
    };
};


interface Page {
    icon: string;
    text: string;
    url: string;
}

interface Setting {
    text: string;
    url: string;
}

