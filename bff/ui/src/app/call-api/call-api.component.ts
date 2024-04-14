import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit, inject } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-call-api',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './call-api.component.html',
  styleUrl: './call-api.component.scss',
})

export class CallApiComponent {

  private readonly httpClient = inject(HttpClient);
  dataFromAzureProtectedApi$: Observable<string[]>;

  getDirectApiData() {
    this.dataFromAzureProtectedApi$ = this.httpClient.get<string[]>(
      `${this.getCurrentHost()}/api/DirectApi`
    );
  }

  private getCurrentHost() {
    const host = window.location.host;
    const url = `${window.location.protocol}//${host}`;

    return url;
  }
}
