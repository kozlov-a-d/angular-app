import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NoteService } from '../shared/note.service';
import { Note } from '../shared/note.model';

@Component({
  selector: 'app-note-editor',
  templateUrl: './note-editor.component.html',
  styleUrls: ['./note-editor.component.scss']
})
export class NoteEditorComponent implements OnInit {

  note: Note;
  constructor(private currentRoute: ActivatedRoute, private router: Router, private service: NoteService) { }

  ngOnInit() {
    const id: number = +this.currentRoute.snapshot.paramMap.get('id');
    this.note = this.service.getById(id);
  }

  onBack() {
    this.router.navigate(['notes']);
  }

}
