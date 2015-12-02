#!/bin/bash
# 
# حق نشر 1392-1402 دانش پژوهان ققنوس
# حقوق این اثر محفوظ است.
# 
# استفاده مجدد از متن و یا نتایج این اثر در هر شکل غیر قانونی است مگر اینکه متن حق
# نشر بالا در ابتدای تمامی مستندهای و یا برنامه‌های به دست آمده از این اثر
# بازنویسی شود. این کار باید برای تمامی مستندها، متنهای تبلیغاتی برنامه‌های
# کاربردی و سایر مواردی که از این اثر به دست می‌آید مندرج شده و در قسمت تقدیر از
# صاحب این اثر نام برده شود.
# 
# نام گروه دانش پژوهان ققنوس ممکن است در محصولات به دست آمده از این اثر درج
# نشود که در این حالت با مطالبی که در بالا اورده شده در تضاد نیست. برای اطلاع
# بیشتر در مورد حق نشر آدرس زیر مراجعه کنید:
# 
# http://dpq.co.ir/licenses
# 

SERVER_DIR=$SERVER_INS_DIR
SERVER_BACHUP_DIR=$SERVER_INS_DIR/backup
VERSION=
COMMAND=


#
#  متغیرها
#
# از آنجا که کاربرد نپشته‌ها در ابزارهای معرفی شده بسیار زیاده شده است نیاز به
# این بود که این متغیرها نام‌گذاری شده و به صورت مناسبی دسته‌بندی شود. در اینجا
# تمام متغیرهای مورد نیاز را تشریح خواهیم کرد.
# 
# تمام متغیرها در این نپشته‌ها با نام SERVER_ شروع می‌شود.
#
#

#SERVER_INS_DIR=
SERVER_BIN_DIR=$SERVER_INS_DIR/bin
SERVER_DOC_DIR=$SERVER_INS_DIR/doc
SERVER_SRC_DIR=/home/maso/git/Ghazal/ghazal-web/src
SERVER_PWD_DIR=$PWD

SERVER_CON_VERBOSE=false
SERVER_CON_ERROR=true
SERVER_CON_WARNING=true

SERVER_PLU_DIR=/home/maso/Workspace/git/Pluf/pluf
SERVER_PLU_VERSION=1.0.0

SERVER_APP_NAME=ghazal
SERVER_APP_VERSION=PHP-0.1.0
SERVER_APP_CONF=$SERVER_INS_DIR/src/config.php
SERVER_APP_DIR=$SERVER_SRC_DIR

SERVER_BAC_DIR=$SERVER_INS_DIR/backup
SERVER_BAC_PREFIX=`date +%y-%m-%d`


# maso 1391: get custom parameters such as server dir
while getopts ":b:a:p:v:c:V" o; do
    case "${o}" in
        a)
        	SERVER_APP_NAME=${OPTARG}
            ;;
        b)
            SERVER_BAC_PREFIX=${OPTARG}
            ;;
        p)
            PLUF_DIR=${OPTARG}
            SERVER_PLU_DIR=${OPTARG}
            ;;
        v)
            VERSION=${OPTARG}
            ;;
        V)
         	SERVER_CON_VERBOSE=true
         	;;
        c)
        	COMMAND=${OPTARG}
        	;;
        *)
            server_log_error "Unkown option?!"
            exit 1;
            ;;
    esac
done
shift $((OPTIND-1))


server_log "PLUF_INS_DIR :%s" $PLUF_INS_DIR
server_log "SERVER_PLU_DIR :%s" $SERVER_PLU_DIR

server_log "SERVER_INS_DIR :%s" $SERVER_INS_DIR
server_log "SERVER_BIN_DIR :%s" $SERVER_BIN_DIR
server_log "SERVER_DOC_DIR :%s" $SERVER_DOC_DIR
server_log "SERVER_SRC_DIR :%s" $SERVER_SRC_DIR

server_log "SERVER_BAC_DIR :%s" $SERVER_BAC_DIR
server_log "SERVER_BAC_PREFIX :%s" $SERVER_BAC_PREFIX

server_log "SERVER_CON_VERBOSE :%s" $SERVER_CON_VERBOSE
server_log "SERVER_CON_ERROR :%s" $SERVER_CON_ERROR
server_log "SERVER_CON_WARNING :%s" $SERVER_CON_WARNING

server_log "SERVER_APP_NAME :%s" $SERVER_APP_NAME
server_log "SERVER_APP_VERSION :%s" $SERVER_APP_VERSION


