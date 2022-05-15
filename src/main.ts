import { Route } from './framework/router'
import { Component } from './framework/component'
import { Service } from './framework/service'
import { Module } from './framework/module'

@Service( '' )
export class API {
}

@Component( '<p>Login</p>' )
export class Login {
}

@Route( '/', '<p>Home</p>' )
export class Home {
}

@Route( '/about', '<p>About</p>' )
export class About {
}

@Route( '/contact', '<p>Contact</p>' )
export class Contact {
}

@Module( { routes: [ Home, About, Contact ], components: [ Login ], services: [ API ] } )
export class Application {
}

new Application( )

/*
<nav>
  <a routerLink="/test">Test</a>
</nav>
*/