import { LoaderComponent } from './loader/loader.component';
import { ComponentFactoryResolver, Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appIsLoading]'
})
export class IsLoadingDirective {
  @Input()
  set appIsLoading(appIsLoading: boolean) {
    if (appIsLoading) {
      const componentFactory = this.componentFactoryResolver.resolveComponentFactory(LoaderComponent);
      this.view.createComponent(componentFactory);
    } else {
      this.view.clear();
      this.view.createEmbeddedView(this.template)
    }
  };
  constructor(private view: ViewContainerRef, private componentFactoryResolver: ComponentFactoryResolver, private template: TemplateRef<AnimationPlayState>) { }

}
