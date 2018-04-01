import { Injectable } from '@angular/core';
import { Note } from './note.model';

@Injectable()
export class NoteService {

    data: Note[] = [
        {id: 1, name: 'Test 1', complited: true},
        {id: 2, name: 'Test 4', complited: false},
        {id: 3, name: 'Test 5', complited: true}
    ];

    getAll(): Note[] {
        return this.data;
    }

    getById(id: number): Note {
        return this.data.find( x => x.id === id);
    }

    update(note: Note) {
        const toUpdate = this.getById(note.id);
        Object.assign(toUpdate, note);
    }

    create(note: Note) {
        this.data.push(note);
    }

    delete(note: Note) {
        const toDelete = this.getById(note.id);
        this.data.splice(this.data.indexOf(toDelete), 1);
    }

}
