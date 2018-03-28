<div class="container row">
    <div class="col-md-12 center">
        <h2>{{titulo}}</h2>
    </div>
    <div class="col-md-4">
        <p><h5>{{contenido}}</h5></p>
    </div>
    <div class="col-md-8">
        <div class="col-md-6" ng-repeat="img in tableImage">
            <img src="uploads/{{img}}" class="img-rounded" alt="Cinque Terre" width="304" height="236">
        </div>
    </div>
</div>
