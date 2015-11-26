<?php
Pluf::loadFunction('SaaS_Shortcuts_LoadLibFromJson');
Pluf::loadFunction('SaaS_Shortcuts_LoadSPAFromRepository');

/**
 * ساختارهای اولیه داده‌ای و پایگاه داده را ایجاد می‌کند.
 *
 * @param string $params            
 */
function Ghazal_Migrations_Install_setup ($params = '')
{
    // دسته ریشه
    $cat = new KM_Category();
    $cat->title = "root category";
    $cat->description = "auto created";
    $cat->create();
    
    /*
     * موجودیت‌های پیش فرض سیستم
     */
    $user = new Pluf_User();
    $user->login = 'admin';
    $user->last_name = 'admin';
    $user->email = 'admin@dpq.co.ir';
    $user->setPassword('admin');
    $user->administrator = true;
    $user->staff = true;
    $user->create();

    SaaS_Shortcuts_LoadLibFromJson(dirname(__FILE__) . "/slib.json", true);
    SaaS_Shortcuts_LoadSPAFromRepository();
    
    $mainApp = new SaaS_Application();
    $mainApp->title = 'Admim';
    $mainApp->sap = new SaaS_SPA(1);
    $mainApp->description = 'Auto generated application';
    $mainApp->create();
    
    $sysConfig = new SaaS_Configuration();
    $sysConfig->application = $mainApp;
    $sysConfig->key = 'system';
    $sysConfig->type = SaaS_ConfigurationType::SYSTEM;
    $sysConfig->setData("level", 0);
    $sysConfig->owner_write = false;
    $sysConfig->member_write = false;
    $sysConfig->authorized_write = false;
    $sysConfig->other_write = false;
    $sysConfig->owner_read = true;
    $sysConfig->member_read = true;
    $sysConfig->authorized_read = false;
    $sysConfig->other_read = false;
    $sysConfig->create();
    
    $themeConfig = new SaaS_Configuration();
    $themeConfig->application = $mainApp;
    $themeConfig->key = 'theme';
    $themeConfig->type = SaaS_ConfigurationType::GENERAL;
    $themeConfig->setData("id", "g1");
    $themeConfig->setData("style", "default");
    $themeConfig->owner_write = false;
    $themeConfig->member_write = false;
    $themeConfig->authorized_write = false;
    $themeConfig->other_write = false;
    $themeConfig->owner_read = true;
    $themeConfig->member_read = true;
    $themeConfig->authorized_read = true;
    $themeConfig->other_read = true;
    $themeConfig->create();
    
    Pluf_RowPermission::add($user, $mainApp, 'SaaS.software-owner');
//     Pluf_RowPermission::add($mainApp, $mprofile, 'SaaS.sap-authorized-access');
//     Pluf_RowPermission::add($mainApp, $mwiki, 'SaaS.sap-anonymous-access');
//     Pluf_RowPermission::add($mainApp, $main, 'SaaS.sap-anonymous-access');
//     Pluf_RowPermission::add($mainApp, $ghazalr, 'SaaS.sap-anonymous-access');
//     Pluf_RowPermission::add($mainApp, $ghazalu, 'SaaS.sap-anonymous-access');
//     Pluf_RowPermission::add($mainApp, $ghazal, 'SaaS.sap-anonymous-access');
}

/**
 * تمام داده‌های ایجاد شده را از سیستم حذف می‌کند.
 *
 * @param string $params            
 */
function Ghazal_Migrations_Install_teardown ($params = '')
{}
