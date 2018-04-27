import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { MantenedoraService } from "../mantenedora.service";
import { Mantenedora } from "../mantenedora";

@Component({
  selector: 'app-mantenedora-details',
  templateUrl: './mantenedora-details.component.html',
  styleUrls: ['./mantenedora-details.component.css']
})
export class MantenedoraDetailsComponent implements OnInit {

  mantenedora: Mantenedora;
  mantenedoraForm: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private builder: FormBuilder,
    public mantenedoraService: MantenedoraService
  ) { }

  ngOnInit() {

    this.mantenedora = new Mantenedora();

    /* Obter o `ID` passado por parâmetro na URL */
    this.mantenedora.id = this.route.snapshot.params['id'];

    /* Define o titulo da página */
    // this.layout.title = 'Visualizar Mantenedora';

    /* Reactive Forms */
    this.mantenedoraForm = this.builder.group({
      id: [],
      codigo: this.builder.control('', [Validators.required, Validators.maxLength(3)]),
      nome: this.builder.control('', [Validators.required, Validators.maxLength(80)]),
      numeroFiscal: this.builder.control('', [Validators.required, Validators.maxLength(20)]),
      endereco: this.builder.control('', [Validators.required, Validators.maxLength(50)]),
    }, {});

    // Desabilitar formulário para edição
    this.mantenedoraForm.disable();

    // Se existir `ID` realiza busca para trazer os dados
    if (this.mantenedora.id != null) {
      this.mantenedoraService.findOne(this.mantenedora.id)
        .subscribe(mantenedora => {
          this.mantenedoraForm = this.builder.group(mantenedora, {})
        })
    }
  }
}
