<?php

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
    
    $sap = new SaaS_SAP();
    $sap->path = '/main';
    $sap->title = 'Ghazal main app';
    $sap->descritpion = 'Ghazal';
    $sap->create();    
    
    $mainApp = new SaaS_Application();
    $mainApp->title = 'Admim';
    $mainApp->sap = $sap;
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
    
    $lib = new SaaS_Lib();
    $lib->name = 'angular';
    $lib->version = '1.4.4';
    $lib->mode = SaaS_LibMode::RELESE;
    $lib->type = SaaS_LibType::JavaScript;
    $lib->path = '/assets/lib/angular/angular.min.js';
    $lib->create();
    
    $lib = new SaaS_Lib();
    $lib->name = 'angular-animate';
    $lib->version = '1.4.7';
    $lib->mode = SaaS_LibMode::RELESE;
    $lib->type = SaaS_LibType::JavaScript;
    $lib->path = '/assets/lib/angular-animate/angular-animate.min.js';
    $lib->create();
    
    $lib = new SaaS_Lib();
    $lib->name = 'angular-aria';
    $lib->version = '1.4.7';
    $lib->mode = SaaS_LibMode::RELESE;
    $lib->type = SaaS_LibType::JavaScript;
    $lib->path = '/assets/lib/angular-aria/angular-aria.min.js';
    $lib->create();
    
    $lib = new SaaS_Lib();
    $lib->name = 'angular-material-css';
    $lib->version = '0.11.2';
    $lib->mode = SaaS_LibMode::RELESE;
    $lib->type = SaaS_LibType::CSS;
    $lib->path = '/assets/lib/angular-material/angular-material.min.css';
    $lib->create();
   
    $lib = new SaaS_Lib();
    $lib->name = 'angular-material';
    $lib->version = '0.11.2';
    $lib->mode = SaaS_LibMode::RELESE;
    $lib->type = SaaS_LibType::JavaScript;
    $lib->path = ' /assets/lib/angular-material/angular-material.min.js';
    $lib->create();
    
    $lib = new SaaS_Lib();
    $lib->name = 'angular-touch';
    $lib->version = '1.4.4';
    $lib->mode = SaaS_LibMode::RELESE;
    $lib->type = SaaS_LibType::JavaScript;
    $lib->path = '/assets/lib/angular-touch/angular-touch.min.js';
    $lib->create();
    
    $lib = new SaaS_Lib();
    $lib->name = 'angular-translate';
    $lib->version = '2.7.2';
    $lib->mode = SaaS_LibMode::RELESE;
    $lib->type = SaaS_LibType::JavaScript;
    $lib->path = '/assets/lib/angular-translate/angular-translate.min.js';
    $lib->create();
    
    $lib = new SaaS_Lib();
    $lib->name = 'angular-ui-router';
    $lib->version = '0.2.15';
    $lib->mode = SaaS_LibMode::RELESE;
    $lib->type = SaaS_LibType::JavaScript;
    $lib->path = '/assets/lib/angular-ui-router/release/angular-ui-router.min.js';
    $lib->create();
    
    $lib = new SaaS_Lib();
    $lib->name = 'angular-xeditable';
    $lib->version = '0.1.9';
    $lib->mode = SaaS_LibMode::RELESE;
    $lib->type = SaaS_LibType::JavaScript;
    $lib->path = '/assets/lib/angular-xeditable/dist/js/xeditable.min.js';
    $lib->create();
    
    $lib = new SaaS_Lib();
    $lib->name = 'markdown';
    $lib->version = '0.5.0';
    $lib->mode = SaaS_LibMode::RELESE;
    $lib->type = SaaS_LibType::JavaScript;
    $lib->path = '/assets/lib/markdown/lib/markdown.js';
    $lib->create();
}

/**
 * تمام داده‌های ایجاد شده را از سیستم حذف می‌کند.
 *
 * @param string $params            
 */
function Ghazal_Migrations_Install_teardown ($params = '')
{}
