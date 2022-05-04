import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TestiksComponent } from './testiks.component';
import { EditComponent } from './edit/edit.component';

const routes: Routes = [
  {
    path: '',
    component: TestiksComponent,
    data: {
      title: 'Testimiseks',
    },
    children: [
      {
        path: 'edit/:editID',
        component: EditComponent,
        data: {
          title: 'Testiks Edit',
        },
      },
      // {
      //   path: 'list',
      //   component: TestiksComponent,
      //   data: {
      //     title: 'Testiks!!',
      //   }
      // }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TestiksRoutingModule {}

