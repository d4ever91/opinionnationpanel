import React, { ReactNode, useEffect } from 'react';
import { Box, CloseButton, Flex, Menu, MenuButton, Button, MenuItem, MenuList, useColorModeValue, Drawer, DrawerContent, Text, useDisclosure, BoxProps, FlexProps, IconButton } from '@chakra-ui/react';
import { HamburgerIcon } from '@/assets/icons';
import { getModules } from '@/lib/action/module';
import { RootState } from '@/lib/store/rootReducer';
import { useDispatch, useSelector } from 'react-redux';
import { Module } from '@/lib/constants/module';
import { Icon } from '@iconify/react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { signOut, useSession } from 'next-auth/react';
import {  BASE_PATH } from '@/lib/config/config';

export default function SimpleSidebar({ children }: { children: ReactNode }) {

  const { data } = useSession();
  const dispatch = useDispatch()
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { modules } = useSelector((state: RootState) => state.module);

  useEffect(() => {
    getLinkItems();
  }, [])

  const getLinkItems = async () => {
    await dispatch<any>(getModules());
  }
  
  return (
    <Box minH="100vh">
      <SidebarContent
        onClose={() => onClose}
        data={data}
        display={{ base: 'none', md: 'block' }}
        modules={modules}
      />
      <Drawer
        autoFocus={false}
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size="full">
        <DrawerContent>
          <SidebarContent data={data} onClose={onClose} modules={modules} />
        </DrawerContent>
      </Drawer>
      <MobileNav display={{ base: 'flex', md: 'none' }} onOpen={onOpen} />
      <Box ml={[0, 300, 300]} mr={{ base: 0, md: 10 }} p="4">
        {children}
      </Box>
    </Box>
  );
}

interface SidebarProps extends BoxProps {
  onClose: () => void;
  modules: Module[]
  data: any
}

const SidebarContent = ({ onClose, data, modules, ...rest }: SidebarProps) => {
  const path = useRouter();
  return (
    <Box
      bgColor="#000"
      borderRight="1px"
      borderRightColor={useColorModeValue('gray.200', 'gray.700')}
      w={['full', 270, 270]}
      pos="fixed"
      h="full"
      {...rest}>
      <Flex h="5" alignItems="center" justifyContent="space-between">
        <CloseButton style={{ color: 'white', marginTop: 20, marginLeft: 10 }} display={{ base: 'flex', md: 'none' }} onClick={onClose} />
      </Flex>
      <Flex p="5" borderBottom="1px" alignItems="center" justifyContent="center">
        <img width="120" src="/images/logo.png" />
      </Flex>
      {modules.map((module: Module) => (
        <NavItem key={module.name} icon={module.icon} route={module.route} >
          <>
            <Icon icon={module.icon} />
            <Text style={{ color: (path.pathname.includes(module.route) ? '#F3BB45' : "#fff") }} marginLeft="2">{module.label}</Text>
          </>
        </NavItem>
      ))}
      <Box style={{ position: 'absolute', bottom: 10 }}>
        <Menu>
          <MenuButton _hover={{ bg: 'rgb(30 41 59 / 1)' }}
            _expanded={{ bg: '#000' }}
            _focus={{ bg: '#000' }} backgroundColor="#000" color="#fff" fontSize="sm" textTransform="none" as={Button} rightIcon={<Icon icon="bx:chevron-down" />}>
            {data?.user?.email}
          </MenuButton>
          <MenuList>
            <MenuItem onClick={() => signOut({
              callbackUrl: BASE_PATH + '/auth/login'
            })}>Logout</MenuItem>
          </MenuList>
        </Menu>
      </Box>
    </Box>
  );
};

interface NavItemProps extends FlexProps {
  children: any;
  icon: any
  route: string
}
const NavItem = ({ children, icon, route, ...rest }: NavItemProps) => {
  const path = useRouter();
  return (
    <Link href={route} style={{ textDecoration: 'none', color: '#eeeeee' }} >
      <Flex
        align="center"
        p="4"
        mx="4"
        borderRadius="lg"
        role="group"
        cursor="pointer"
        color={path.pathname.includes(route) ? '#F3BB45' : "#fff"}
        {...rest}>
        {children}
      </Flex>
    </Link>
  );
};

interface MobileProps extends FlexProps {
  onOpen: () => void;
}
const MobileNav = ({ onOpen, ...rest }: MobileProps) => {
  return (
    <Flex
      ml={{ base: 0, md: 48 }}
      px={{ base: 4, md: 24 }}
      height="20"
      alignItems="center"
      bg={useColorModeValue('#eeeeee', '#eeeeee')}
      borderBottomWidth="1px"
      borderBottomColor={useColorModeValue('gray.200', 'gray.700')}
      justifyContent="flex-start"
      {...rest}>
      <IconButton
        variant="outline"
        onClick={onOpen}
        aria-label="open menu"
        icon={<HamburgerIcon />}
      />
    </Flex>
  );
};