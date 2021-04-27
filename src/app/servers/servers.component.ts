import {
  Component,
  OnInit,
  ViewChild,
  ViewContainerRef,
  ComponentFactoryResolver
} from "@angular/core";

import { ServerComponent } from "../server/server.component";

@Component({
  selector: "app-servers",
  templateUrl: "./servers.component.html",
  styleUrls: ["./servers.component.css"]
})
export class ServersComponent implements OnInit {
  isDisabled = true;
  serverName = "";

  @ViewChild("servercontainer", { read: ViewContainerRef })
  entry: ViewContainerRef;

  constructor(private resolver: ComponentFactoryResolver) {}

  ngOnInit() {
  }

  createServer() {
    const factory = this.resolver.resolveComponentFactory(ServerComponent);
    const componentRef = this.entry.createComponent(factory);
    componentRef.instance.serverName = this.serverName;
    componentRef.instance.componentRef = componentRef;
  }

}
