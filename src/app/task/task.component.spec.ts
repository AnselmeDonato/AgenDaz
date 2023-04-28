import { ComponentFixture, TestBed } from '@angular/core/testing';
import { render, screen } from '@testing-library/angular';

import { TaskComponent } from './task.component';

const test_task_name = 'test_task';

describe('TaskComponent', () => {
  it('should render test task', async () => {
    await render(TaskComponent, {
      componentProperties: {task: {description: test_task_name, done: false}}
    })

    expect(screen.getByText(test_task_name)).toBeTruthy()
  })
});
