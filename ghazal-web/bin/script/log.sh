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

function server_log(){
	if [ "$SERVER_CON_VERBOSE" = true ] ; then
		printf "[INFO]\t"
		printf "$@"
		printf "\n"
	fi
}

function server_log_error(){
	if [ "$SERVER_CON_ERROR" = true ] ; then
		printf "[ERROR]\t"
		printf "$@"
		printf "\n"
	fi
}

function server_log_warning(){
	if [ "$SERVER_CON_WARNING" = true ] ; then
		printf "[WARNING]\t"
		printf "$@"
		printf "\n"
	fi
}
