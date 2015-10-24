#!/bin/bash
# 
# حق نشر 1392-1402 دانش پژوهان ققنوس
# حقوق این محتوی محفوظ است.
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

#Folders
function server_install_prepare_folders(){
	#Plugins
	#mkdir -p \
	#	$HM_PLU_DIR/Peechak/Plugin
	server_log "Not implemented"
}

#install
function server_install(){
	cd $SERVER_SRC_DIR
	mysql -u root -e "create schema if not exists ${SERVER_APP_NAME};"
	server_log "php $SERVER_PLU_DIR/src/migrate.php --conf=$SERVER_APP_CONF -a -d -i"
	php \
		$SERVER_PLU_DIR/src/migrate.php \
		--conf=$SERVER_APP_CONF \
		--include-path= /home/maso/Workspace/pluf \
		-a -d -i
	server_install_prepare_folders
	exit 0;
}