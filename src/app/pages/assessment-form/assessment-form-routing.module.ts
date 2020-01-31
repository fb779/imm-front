import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AssessmentFormComponent } from './assessment-form.component';
import { VisitComponent } from './visit/visit.component';
import { StudyComponent } from './study/study.component';
import { WorkPermitComponent } from './work-permit/work-permit.component';

const routes: Routes = [
  {
    path: '',
    component: AssessmentFormComponent,
    // children: [
    //   {
    //     path: 'visit',
    //     component: VisitComponent,
    //   },
    //   {
    //     path: 'study',
    //     component: StudyComponent,
    //   },
    //   {
    //     path: 'work-permit',
    //     component: WorkPermitComponent,
    //   },
    // ],
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [
    RouterModule,
  ],
})
export class AssessmentFormRoutingModule {
}
