import { HeartIcon } from '@radix-ui/react-icons';
import {
  BiPodcast,
  BiSearch,
  BiSolidCog,
} from "react-icons/bi";
import { BsBellFill } from "react-icons/bs";

import './App.css';
import { menuContent, subMenuContent,additionalSubMenuContent } from 'utils/menu-content';

import {
  Head,
  Menu,
  Nav,
  Player,
  Card
} from 'components';
import { Button } from 'components/ui/button';

export default function App() {
  return (
    <>
      <Menu.Root>
        <Menu.SubMenu title="Menu">
          {menuContent.map((item, index) => (
            <Menu.Item key={index}
              icon={item.icon}
              label={item.label}
              href={item.href}
            />
          ))}
        </Menu.SubMenu>

        <Menu.SubMenu title="Library">
          {subMenuContent.map((item, index) => (
            <Menu.Item key={index}
              icon={item.icon}
              label={item.label}
              href={item.href}
            />
          ))}
        </Menu.SubMenu>

        <Menu.SubMenu title="Playlist">
          {additionalSubMenuContent.map((item, index) => (
            <Menu.Item key={index}
              icon={item.icon}
              label={item.label}
              href={item.href}
            />
          ))}
        </Menu.SubMenu>

        <Card.Root>
          <Card.Top
            title={
              <h4>
                Apple<br/>Homepod
              </h4>
            }
            imgUri="https://picsum.photos/42/42"
          />
          <Card.Body>
            <BiPodcast size={18} />
            <p>Playing on current device</p>
          </Card.Body>
        </Card.Root>
        
      </Menu.Root>

      <main className='py-5 px-9'>
        <Head>
          <Nav/>
          <div className="search">
            <BiSearch/>
            <input type="text" placeholder="Search"/>
          </div>
        </Head>
        <div className="w-full mt-10 flex items-center justify-between font-semibold">
          <div>
            <h1 className="">Items of your taste</h1>
            <div className="mt-3 p-6">
              <h3 className="text-5xl font-bold mb-4">Glass Nomades</h3>
              <p className='inline'>Artist Name</p> <span className="opacity-55 font-semibold ml-3">12Million plays</span>
              <div className="mt-8 flex items-center gap-4">
                <Button
                  className="px-3 py-4 bg-blue-400 rounded font-bold cursor-pointer"
                  size="lg"
                >Listen Now</Button>
                <Button
                  className="px-3 py-4 rounded-full border-2 hover:bg-white hover:bg-opacity-30 transition font-bold cursor-pointer w-12 h-12"
                ><HeartIcon className='font-6xl' /></Button>
              </div>
            </div>
          </div>
          <img src="https://picsum.photos/360/200" className='rounded-lg' alt="hero" />
        </div>
      </main>

      <aside className='py-5 pr-9'>
        <div className="flex items-center justify-end gap-5 mb-10">
          <BsBellFill size={21} />
          <BiSolidCog size={21} />
          <div className="flex">
            <div className="flex items-center justify-center w-12 h-12 p-2  bg-neutral-700 rounded-l">
              <img className='w-8 h-8 rounded-lg' src="https://picsum.photos/32/32" alt="avatar" />
            </div>
            <div className="bg-neutral-800 rounded-r p-3.5 h-12 hover:bg-neutral-700 hover:cursor-pointer transition-colors">
              <p className='m-auto'>John Doe</p>
            </div>
          </div>
        </div>
          <Player />
      </aside>
    </>
  );
}
