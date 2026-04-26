import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Article } from 'src/app/entity/article.type';

@Component({
  selector: 'app-tile-article',
  templateUrl: './tile-article.component.html',
})
export class TileArticleComponent {
  @Input() data!: Article;
  @Input() active!: string | null;
  @Output() EmitterId: EventEmitter<string> = new EventEmitter<string>();
  @Output() ClickCommentButton: EventEmitter<MouseEvent> =
    new EventEmitter<MouseEvent>();

  formatDateCreated(): string {
    const created = new Date(this.data.created_at);
    const now = new Date();
    const dataFormatDayString = created.toLocaleDateString('en-IN', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });

    if (
      now.getDay() === created.getDay() &&
      now.getMonth() === created.getMonth() &&
      now.getFullYear() === created.getFullYear()
    )
      return `Created today<br>${dataFormatDayString}`;

    const hoursFormatString = created.getHours().toString().padStart(2, '0');
    const minutesFormatString = created
      .getMinutes()
      .toString()
      .padStart(2, '0');

    return `Created on<br> ${dataFormatDayString} as ${hoursFormatString}:${minutesFormatString}`;
  }

  formatDateUpdate(): string {
    const created = new Date(this.data.created_at);
    const updated = new Date(this.data.updated_at);
    const now = new Date();
    const dataFormatDayString = updated.toLocaleDateString('en-IN', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });

    if (created.getTime() === updated.getTime()) return `<br>Never updated`;

    if (
      now.getDay() === updated.getDay() &&
      now.getMonth() === updated.getMonth() &&
      now.getFullYear() === updated.getFullYear()
    )
      return `Updated today<br>${dataFormatDayString}`;

    const hoursFormatString = updated.getHours().toString().padStart(2, '0');
    const minutesFormatString = updated
      .getMinutes()
      .toString()
      .padStart(2, '0');

    return `Last updated on<br> ${dataFormatDayString} as ${hoursFormatString}:${minutesFormatString}`;
  }
}
