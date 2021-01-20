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
}
