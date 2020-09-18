import { NgModule, ModuleWithProviders, SkipSelf, Optional } from '@angular/core';
import { Configuration } from './configuration';
import { HttpClient } from '@angular/common/http';


import { ConsultaControllerService } from './api/consultaController.service';
import { DoctorControllerService } from './api/doctorController.service';
import { LoginControllerService } from './api/loginController.service';
import { PacienteControllerService } from './api/pacienteController.service';
import { UsuarioControllerService } from './api/usuarioController.service';

@NgModule({
  imports:      [],
  declarations: [],
  exports:      [],
  providers: [
    ConsultaControllerService,
    DoctorControllerService,
    LoginControllerService,
    PacienteControllerService,
    UsuarioControllerService ]
})
export class ApiModule {
    // @ts-ignore
  public static forRoot(configurationFactory: () => Configuration): ModuleWithProviders {
        return {
            ngModule: ApiModule,
            providers: [ { provide: Configuration, useFactory: configurationFactory } ]
        };
    }

    constructor( @Optional() @SkipSelf() parentModule: ApiModule,
                 @Optional() http: HttpClient) {
        if (parentModule) {
            throw new Error('ApiModule is already loaded. Import in your base AppModule only.');
        }
        if (!http) {
            throw new Error('You need to import the HttpClientModule in your AppModule! \n' +
            'See also https://github.com/angular/angular/issues/20575');
        }
    }
}
