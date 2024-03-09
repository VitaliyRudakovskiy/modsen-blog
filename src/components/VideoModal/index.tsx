'use client';

import { useCallback, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { useTranslations } from 'next-intl';

import Button from '@/UI/Button';

import { VideoProps } from './types';
import styles from './VideoModal.module.scss';

const VideoModal = ({ setIsOpen: setNavbar }: VideoProps) => {
  const t = useTranslations('header');
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
    setNavbar(false);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = useCallback(() => {
    setIsOpen(false);
    document.body.style.overflow = 'auto';
  }, [setIsOpen]);

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeModal();
    },
    [closeModal]
  );

  useEffect(() => {
    document.addEventListener('keyup', handleKeyDown);
    return () => document.removeEventListener('keyup', handleKeyDown);
  }, [handleKeyDown]);

  return (
    <>
      <Button onClick={openModal} variant='secondary'>
        {t('button')}
      </Button>
      {isOpen &&
        createPortal(
          <div className={styles.overlay}>
            <div className={styles.content}>
              <button onClick={closeModal} className={styles.content__close}>
                &times;
              </button>
              <iframe
                className={styles.content__iframe}
                src='https://www.youtube.com/embed/RgKAFK5djSk?autoplay=1'
                title='YouTube video player'
                allow='accelerometer; autoplay; gyroscope'
                allowFullScreen
                loading='lazy'
              />
            </div>
          </div>,

          document.body
        )}
    </>
  );
};

export default VideoModal;
