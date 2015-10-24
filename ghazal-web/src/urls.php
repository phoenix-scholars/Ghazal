<?php
$base = '';
return array(
        array( // User management
                'regex' => '#^/api/user#',
                'base' => $base,
                'sub' => include 'User/urls.php'
        ),
        array( // User message & inbox
                'regex' => '#^/api/inbox#',
                'base' => $base,
                'sub' => include 'Inbox/urls.php'
        ),
        array( // Wiki and online help
                'regex' => '#^/api/wiki#',
                'base' => $base,
                'sub' => include 'Wiki/urls.php'
        ),
        array( // Knowledge management
                'regex' => '#^/api/km#',
                'base' => $base,
                'sub' => include 'KM/urls.php'
        ),
        array( // Jayab
                'regex' => '#^/api/jayab#',
                'base' => $base,
                'sub' => include 'Jayab/urls.php'
        ),
		array (
				'regex' => '#^/api/saas#',
				'base' => $base,
				'sub' => include 'SaaS/urls.php' 
		),
		array ( // SaaS : online applications
				'regex' => '#^#',
				'base' => $base,
				'sub' => include 'SaaS/urls-app.php' 
		) 
);


