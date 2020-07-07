"use strict";
var TowerDefender;
(function (TowerDefender) {
    class TowerController {
        upgradeTower() {
            this.tower.upgrade();
        }
        rotate(_angle) {
            this.tower.rotate(_angle);
        }
        attack() {
            this.tower.attack();
        }
        getLevel() {
            return this.tower.getLevel();
        }
        getDamage() {
            return this.tower.getDamage();
        }
        getSpeed() {
            return this.tower.getSpeed();
        }
    }
    TowerDefender.TowerController = TowerController;
})(TowerDefender || (TowerDefender = {}));
//# sourceMappingURL=TowerController.js.map