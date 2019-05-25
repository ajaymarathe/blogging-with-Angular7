import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-img-upload',
  templateUrl: './img-upload.component.html',
  styleUrls: ['./img-upload.component.css']
})
export class ImgUploadComponent implements OnInit {

  constructor(private http: HttpClient) { }

  img;

  ngOnInit() {
  }

  onFileChanged(event) {
    const file = event.target.files[0]
    console.log(file.name)

    this.http.post("http://127.0.0.1:8000/api/img",{
        image: file.name
    })
    .subscribe(
      (response: Response) => {
        console.log(response);
      }
    );
  }

}
