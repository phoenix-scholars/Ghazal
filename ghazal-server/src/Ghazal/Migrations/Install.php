<?php

/**
 * ساختارهای اولیه داده‌ای و پایگاه داده را ایجاد می‌کند.
 * 
 * @param string $params
 */
function Ghazal_Migrations_Install_setup ($params = '')
{
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
    
    $mainApp = new SaaS_Application();
    $mainApp->title = 'Admim';
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
}

/**
 * تمام داده‌های ایجاد شده را از سیستم حذف می‌کند.
 *
 * @param string $params            
 */
function Ghazal_Migrations_Install_teardown ($params = '')
{}