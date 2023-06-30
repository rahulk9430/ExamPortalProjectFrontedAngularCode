import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './pages/register/register.component';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { AdminDashboardComponent } from './pages/admin/admin-dashboard/admin-dashboard.component';
import { UserDashboardComponent } from './pages/user/user-dashboard/user-dashboard.component';
import { AdminGuard } from './service/admin.guard';
import { UserGuard } from './service/user.guard';
import { ProfileComponent } from './pages/profile/profile.component';
import { WelcomeComponent } from './pages/admin/welcome/welcome.component';
import { WelcomeUserComponent } from './pages/user/welcome-user/welcome-user.component';
import { CategoriesComponent } from './pages/admin/categories/categories.component';
import { AddCategoryComponent } from './pages/admin/add-category/add-category.component';
import { QuizzesComponent } from './pages/admin/quizzes/quizzes.component';
import { AddQuizComponent } from './pages/admin/add-quiz/add-quiz.component';
import { UpdateQuizComponent } from './pages/admin/update-quiz/update-quiz.component';
import { UpdateCategoryComponent } from './pages/admin/update-category/update-category.component';
import { ViewQuizQuestionsComponent } from './pages/admin/view-quiz-questions/view-quiz-questions.component';
import { AddQuestionComponent } from './pages/admin/add-question/add-question.component';
import { UpdateQuestionComponent } from './pages/admin/update-question/update-question.component';
import { LoadQuizComponent } from './pages/user/load-quiz/load-quiz.component';
import { UserViewQuestionComponent } from './pages/user/user-view-question/user-view-question.component';
import { ViewCategoryQuizComponent } from './pages/user/view-category-quiz/view-category-quiz.component';
import { InstructionsComponent } from './pages/user/instructions/instructions.component';
import { StartComponent } from './pages/user/start/start.component';

const routes: Routes = [
  {
    path:'signup',component:RegisterComponent,pathMatch:'full'
  },
  {
    path:'login',component:LoginComponent,pathMatch:'full',
   
  },
  {
    path:'',component:HomeComponent,pathMatch:'full'
  },
  {
    path:'admin',component:AdminDashboardComponent,

    canActivate:[AdminGuard],
    children:[
      {
        path:'profile',component:ProfileComponent
      },
      {
        path:'',component:WelcomeComponent
      },
      {
        path:'categories',component:CategoriesComponent
      },
      {
        path:'add-category',component:AddCategoryComponent
      },
      {
        path:'quizzes',component:QuizzesComponent
      },
      {
        path:'add-quiz',component:AddQuizComponent
      },
      {
        path:'update-quiz/:qid',component:UpdateQuizComponent
      },
      {
        path:'update-category/:cid',component:UpdateCategoryComponent
      },
      {
        path:'view-questions/:qid/:title',component:ViewQuizQuestionsComponent
      },
      {
        path:'add-question',component:AddQuestionComponent
      },
      {
        path:'update-question/:qid',component:UpdateQuestionComponent
      }
    ]
  },
  {
    path:'user-dashboard',component:UserDashboardComponent,
    canActivate:[UserGuard],
    children:[
      {
        path:'profile',component:ProfileComponent
      },
      {
        path:'',component:WelcomeUserComponent
      },
      {
        path:'load-quiz',component:LoadQuizComponent
      },
      {
        path:'user-view-questions/:qid/:title',component:UserViewQuestionComponent
      },
      {
        path:'view-category/:cid',component:ViewCategoryQuizComponent
      },
      {
        path:'instructions/:qid',component:InstructionsComponent
      },
      
    ]

  },
  {
    path:'start/:qid',component:StartComponent,
    canActivate:[UserGuard]
  }
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
