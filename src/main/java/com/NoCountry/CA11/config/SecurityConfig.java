package com.NoCountry.CA11.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;

@Configuration
@EnableWebSecurity
@EnableGlobalMethodSecurity(prePostEnabled = true)
public class SecurityConfig  extends WebSecurityConfigurerAdapter {

    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http.headers().frameOptions().sameOrigin().and().authorizeRequests().antMatchers("/css/*", "/img/*", "/js/*").permitAll()
                .and().formLogin()
                .loginPage("/auth/*")
                .usernameParameter("email")
                .passwordParameter("password")
                .defaultSuccessUrl("/")
                .loginProcessingUrl("/logincheck")
                .failureUrl("/login?error=error")
                .permitAll()
                .and().logout()
                .logoutUrl("/logout")
                .logoutSuccessUrl("/login?logout")
                .and().csrf().disable();

    }
}