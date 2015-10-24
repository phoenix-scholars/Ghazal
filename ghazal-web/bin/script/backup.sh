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


function peechak_backup_restore(){
	peechak_log "Trying to restore a back up."
	peechak_log "The backup prefix is \'%s\'" "$PEECHAK_BAC_PREFIX"
	if [ ! -d "$PEECHAK_BAC_DIR" ]; then
		server_log_error "The backup path does not exist"
		return 1;
	fi
	options=
	if [ "$PEECHAK_CON_VERBOSE" = true ] ; then
		options="-d $options"
	fi
	if [[ -z "$PEECHAK_APP_NAME" ]]; then
		options="-a $options"
		mysql -u root -e 'drop schema if exists server;'
		mysql -u root -e 'create schema server;'
		PEECHAK_BAC_PREFIX="Total-$PEECHAK_BAC_PREFIX"
	else
		options="$options --app $PEECHAK_APP_NAME"
	fi
	server_log "Restore up option is: %s" "$options"
	cd $PEECHAK_SRC_DIR
	php	\
		$PEECHAK_PLU_DIR/src/migrate.php \
		--conf=Peechak/conf/server.php \
		$options \
		-r "$PEECHAK_BAC_DIR" \
		"$PEECHAK_BAC_PREFIX"
	cd $PEECHAK_PWD_DIR
	return 0;
}

function server_backup_make(){
	server_log "Trying to make a back up."
	server_log "The backup prefix is \'%s\'" "$PEECHAK_BAC_PREFIX"
	if [[ -z "$PEECHAK_BAC_PREFIX" ]]; then
		PEECHAK_BAC_PREFIX=`date +%y-%m-%d`
	fi
	if [ ! -d "$PEECHAK_BAC_DIR" ]; then
		mkdir -p "$PEECHAK_BAC_DIR"
	fi
	options=
	if [ "$PEECHAK_CON_VERBOSE" = true ] ; then
		options="-d $options"
	fi
	if [[ -z "$PEECHAK_APP_NAME" ]]; then
		options="-a $options"
		PEECHAK_BAC_PREFIX="Total-$PEECHAK_BAC_PREFIX"
	else
		options="$options --app $PEECHAK_APP_NAME"
		PEECHAK_BAC_PREFIX=${PEECHAK_BAC_PREFIX}
	fi
	server_log "Back up option is: %s" "$options"
	cd $PEECHAK_SRC_DIR
	php \
		$PEECHAK_PLU_DIR/src/migrate.php \
		--conf= \
		$options \
		-b "$PEECHAK_BAC_DIR" \
		"$PEECHAK_BAC_PREFIX"
	cd $PEECHAK_PWD_DIR
	return 0;
}