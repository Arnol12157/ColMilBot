<div class="container row center">
    <div class="form-group">
        <label for=" Email1msg">Usuario:</label>
        <input type='text' ng-model='user'>
    </div>
    <div class="form-group">
        <label for=" Email1msg">Contraseña:</label>
        <input type='password' ng-model='pass'>
    </div>
    <button ng-click="ingresar(user,pass)">Ingresar</button>
</div>
