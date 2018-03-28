<div class="container" >
            <div class="row">
                <div class="col-md-12">
                    <div class="form-group">
                        <label for=" Email1msg">Titulo:</label>
                        <input type='text' ng-model='titulo'>
                    </div>
                    <div class="form-group">
                        <label for=" Email1msg">Contenido:</label>
                        <textarea class="form-control" rows="5" ng-model='contenido'></textarea>
                    </div>
                    <button ng-click='guardarColomilNotas(titulo,contenido)'>Guardar</button>
                </div>

                <div class="col-md-3">

                    <h3>Seleccionar imagen</h3>

                    
                    <input type="file" nv-file-select="" uploader="uploader" />
                </div>

                <div class="col-md-9" style="margin-bottom: 40px">

                    <h3>Lista de imagenes</h3>
                    <p>Numero de imagenes: {{ uploader.queue.length }}</p>

                    <table class="table">
                        <thead>
                            <tr>
                                <th width="50%">Name</th>
                                <th ng-show="uploader.isHTML5">Size</th>
                                <th ng-show="uploader.isHTML5">Progress</th>
                                <th>Status</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr ng-repeat="item in uploader.queue">
                                <td><strong>{{ item.file.name }}</strong></td>
                                <td ng-show="uploader.isHTML5" nowrap>{{ item.file.size/1024/1024|number:2 }} MB</td>
                                <td ng-show="uploader.isHTML5">
                                    <div class="progress" style="margin-bottom: 0;">
                                        <div class="progress-bar" role="progressbar" ng-style="{ 'width': item.progress + '%' }"></div>
                                    </div>
                                </td>
                                <td class="text-center">
                                    <span ng-show="item.isSuccess"><i class="glyphicon glyphicon-ok"></i></span>
                                    <span ng-show="item.isCancel"><i class="glyphicon glyphicon-ban-circle"></i></span>
                                    <span ng-show="item.isError"><i class="glyphicon glyphicon-remove"></i></span>
                                </td>
                                <td nowrap>
                                    <button type="button" class="btn btn-success btn-xs" ng-click="item.upload()" ng-disabled="item.isReady || item.isUploading || item.isSuccess">
                                        <span class="glyphicon glyphicon-upload"></span> Subir
                                    </button>
                                    <!--button type="button" class="btn btn-warning btn-xs" ng-click="item.cancel()" ng-disabled="!item.isUploading">
                                        <span class="glyphicon glyphicon-ban-circle"></span> Cancel
                                    </button-->
                                    <button type="button" class="btn btn-danger btn-xs" ng-click="item.remove()">
                                        <span class="glyphicon glyphicon-trash"></span> Borrar
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                    </table>

                    <div>
                        <div>
                            Barra de progreso de subida:
                            <div class="progress" style="">
                                <div class="progress-bar" role="progressbar" ng-style="{ 'width': uploader.progress + '%' }"></div>
                            </div>
                        </div>
                        <!--button type="button" class="btn btn-success btn-s" ng-click="uploader.uploadAll()" ng-disabled="!uploader.getNotUploadedItems().length">
                            <span class="glyphicon glyphicon-upload"></span> Upload all
                        </button>
                        <button type="button" class="btn btn-warning btn-s" ng-click="uploader.cancelAll()" ng-disabled="!uploader.isUploading">
                            <span class="glyphicon glyphicon-ban-circle"></span> Cancel all
                        </button>
                        <button type="button" class="btn btn-danger btn-s" ng-click="uploader.clearQueue()" ng-disabled="!uploader.queue.length">
                            <span class="glyphicon glyphicon-trash"></span> Remove all
                        </button-->
                    </div>

                </div>

            </div>

        </div>



        <div class="container row">
            <table class="table" ng-if="tableImage.length > 0">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Imagen</th>
                        <th>Accion</th>
                    </tr>
                </thead>
                <tbody>
                    <tr ng-repeat="img in tableImage">
                        <td>{{$index+1}}</td>
                        <td>{{img}}</td>
                        <td><button class='btn-danger'>Eliminar</button></td>
                    </tr>
                </tbody>
            </table>
        </div>
