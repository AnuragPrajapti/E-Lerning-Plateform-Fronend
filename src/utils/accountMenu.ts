import { ISettingMenu } from "../interface/ISettingMenu";


export const accountMenu: ISettingMenu[] = [
    {
      title: 'Account Settings',
      description:
        'Manage your accounts security such as email, password and etc.',
      route: '/account',
    },
    {
      title: 'Edit Profile',
      description:
        'Manage your personal data such as first name, middle name, last name, contact numbers and etc.',
      route: '/editProfile',
    },
]