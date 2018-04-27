import { Component, NgModule, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { FileUploader } from 'ng2-file-upload';

import { MantenedoraService } from "../mantenedora.service";
import { Mantenedora } from "../mantenedora";
import { Observable } from 'rxjs/Observable';
import { CURRENCYMASKDIRECTIVE_VALUE_ACCESSOR } from 'ng2-currency-mask';
import { FormControl } from '@angular/forms/src/model';

@Component({
  selector: 'app-mantenedora-form',
  templateUrl: './mantenedora-form.component.html',
  styleUrls: ['./mantenedora-form.component.css']
})
export class MantenedoraFormComponent implements OnInit {

  mantenedora: Mantenedora;
  mantenedoraForm: FormGroup;

  constructor(

    private route: ActivatedRoute,
    private router: Router,
    private builder: FormBuilder,
    private imagem: FormBuilder,
    public mantenedoraService: MantenedoraService,

  ) { }

  ngOnInit() {

    this.mantenedora = new Mantenedora();

    /* Obter o `ID` passado por parâmetro na URL */
    this.mantenedora.id = this.route.snapshot.params['id'];

    /* Define o titulo da página */
    // this.layout.title = (this.mantenedora.id == null) ? 'Nova Mantenedora' : 'Alterar Mantenedora';

    /* Reactive Forms */
    this.mantenedoraForm = this.builder.group({
      id:[],
      codigo: [null, [Validators.required, Validators.maxLength(3)]],
      nome: [null, [Validators.required, Validators.maxLength(80)]],
      numeroFiscal: [null, [Validators.required, Validators.maxLength(20)]],
      endereco: [null, [Validators.required, Validators.maxLength(50)]]
    }, {});

    // Se existir `ID` realiza busca para trazer os dados
    if (this.mantenedora.id != null) {
      this.mantenedoraService.findOne(this.mantenedora.id)
        .subscribe(mantenedora => {
          this.mantenedoraForm.patchValue(mantenedora);
        });
    }
  }

  /* Método para salva mantenedora */
  salvar(mantenedora: Mantenedora) {
    this.mantenedoraService.save(mantenedora)
      .subscribe(response => {
        /* Redireciona para lista */
        this.router.navigate(['/mantenedora']);
      })
  }

}
