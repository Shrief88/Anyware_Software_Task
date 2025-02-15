import { Button, ButtonGroup } from '@mui/material';
import { useTranslation } from 'react-i18next';

const LanguageSwitcher = () => {
  const {i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <ButtonGroup size="small" aria-label="language switcher">
      <Button
        variant={i18n.language === 'en' ? 'contained' : 'outlined'}
        onClick={() => changeLanguage('en')}
      >
        EN
      </Button>
      <Button
        variant={i18n.language === 'ar' ? 'contained' : 'outlined'}
        onClick={() => changeLanguage('ar')}
      >
        عربي
      </Button>
    </ButtonGroup>
  );
};

export default LanguageSwitcher;
