import CompanyProfileIcon from '../assets/icons/companyProfile.svg';
import AppColorIcon from '../assets/icons/appColor.svg';
import UserIcon from '../assets/icons/user.svg';
import RoleIcon from '../assets/icons/role.svg';
import MailIcon from '../assets/icons/mail.svg';
import SubscriptionIcon from '../assets/icons/subscription.svg';
import AboutIcon from '../assets/icons/about.svg';
import RateIcon from '../assets/icons/rate.svg';
import PPIcon from '../assets/icons/pp.svg';

export const BusinessSettingsArray = [
  {
    name: 'Company Profile',
    icon: <CompanyProfileIcon height={24} width={24} />,
    route: 'companyProfile',
  },
  {
    name: 'App Color',
    icon: <AppColorIcon height={24} width={24} />,
    route: 'app',
  },
  {
    name: 'Users',
    icon: <UserIcon height={24} width={24} />,
    route: 'companyProfile',
  },
  {
    name: 'Roles',
    icon: <RoleIcon height={24} width={24} />,
    route: 'companyProfile',
  },
  {
    name: 'Email Settings',
    icon: <MailIcon height={24} width={24} />,
    route: 'companyProfile',
  },
  {
    name: 'Subscription',
    icon: <SubscriptionIcon height={24} width={24} />,
    route: 'companyProfile',
  },
];

export const OthersSettingsArray = [
  {
    name: 'About App',
    icon: <AboutIcon height={24} width={24} />,
    route: 'companyProfile',
  },
  {
    name: 'Rate App',
    icon: <RateIcon height={24} width={24} />,
    route: 'companyProfile',
  },
  {
    name: 'Privacy Policy',
    icon: <PPIcon height={24} width={24} />,
    route: 'companyProfile',
  },
  {
    name: 'Terms & Conditions',
    icon: <PPIcon height={24} width={24} />,
    route: 'companyProfile',
  },
];
