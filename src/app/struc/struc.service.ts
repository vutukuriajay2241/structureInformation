import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StrucService {

  constructor(private httpClient: HttpClient) { }
  public getData(){
    return this.httpClient.get(`https://astb-miner-v2.herokuapp.com/v2/18lJe-9fq5fHWr-9HuFTzhWnmfygeuXs2bbsXO8vh1FU/0`);
  }
  public getDetails(id){
    return this.httpClient.get(`https://www.ebi.ac.uk/ols/api/ontologies/uberon/terms?iri=http://purl.obolibrary.org/obo/${id}`);

  }
}
