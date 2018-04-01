import { Component, OnInit } from '@angular/core';
import { NoteService } from '../shared/note.service';
import { Note } from '../shared/note.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-note-list',
  templateUrl: './note-list.component.html',
  styleUrls: ['./note-list.component.scss']
})
export class NoteListComponent implements OnInit {

  notes: Note[];
  constructor( private service: NoteService, private router: Router) { }

  ngOnInit() {
    this.notes = this.service.getAll();
  }

  onCreate() {
    console.log('test');
  }

  onEdit(note: Note) {
    this.router.navigate(['notes', 'edit', note.id]);
  }

  onDelete(note: Note) {
    this.service.delete(note);
  }

}
