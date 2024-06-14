import { IconType } from 'react-icons';
import { BsDiscord, BsGithub, BsInstagram, BsTiktok, BsTwitterX, BsYoutube, BsTwitch } from 'react-icons/bs';
import { DiNodejsSmall } from 'react-icons/di';
import { SiCss3, SiExpress, SiFirebase, SiHtml5, SiHtmlacademy, SiJavascript, SiLua, SiMongodb, SiNextdotjs, SiPhp, SiPython, SiTailwindcss, SiTypescript, SiVercel } from 'react-icons/si';
import { TbBrandCSharp, TbBrandNextjs, TbBrandVercel, TbFileTypeJsx } from 'react-icons/tb';
import { jsx } from 'react/jsx-runtime';  

export const projects: { name: string; description: string; iconURL: string; link: string; }[] = [
  {
    name: 'Rtk Boom',
    description: 'Sunucunuzun Güvenli Genel Botu.',
    link: '',
    iconURL: 'https://cdn.discordapp.com/avatars/1234085623619653685/a_86f0f28e4d0938d03f6dc3ebc0e27f4b.webp',
  },
];

export const githubUsername = 'ragnar054';
export const discordId = '1150527008485412895';

export const socialMediaAccounts: { name: string; link: string; iconURL: IconType }[] = [
  {
    name: 'Github',
    link: 'https://github.com/Ragnar054' + githubUsername,
    iconURL: BsGithub,
  },
  {
    name: 'Discord',
    link: 'https://discord.com/channels/@me/1154444966429462578 ' + discordId,
    iconURL: BsDiscord,
  },
  {
    name: 'Instagram',
    link: 'https://www.instagram.com/batuglar',
    iconURL: BsInstagram,
  },
  {
    name: 'Twich  ',
    link: 'https://www.twitch.tv/',
    iconURL: BsTwitch,
  },
  {
    name: 'TikTok',
    link: 'https://tiktok.com/@',
    iconURL: BsTiktok,
  },
];

export const technologiesAndLanguages: { name: string; iconURL: IconType }[] = [
  {
    name: 'Javascript',
    iconURL: SiJavascript,
  },
  {
    name: 'Vercel.app',
    iconURL: SiVercel,
  },
  {
    name: 'Next.js',
    iconURL: TbBrandNextjs,
  },
  {
    name: 'Python',
    iconURL: SiPython,
  },
  {
    name: 'Html',
    iconURL: SiHtml5,
  },
  {
    name: 'Lua',
    iconURL: SiLua,
  },
  {
    name: 'Php',
    iconURL: SiPhp
  }
{
    name: 'Css',
    iconURL: SiCss,
  }
];
