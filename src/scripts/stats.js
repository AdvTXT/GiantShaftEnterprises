function StatsController($scope, gameService, playerService, cacheService) {
	$scope.playerService = playerService;
	$scope.cacheService = cacheService;

	$scope.totalBuildings = playerService.items.reduce(function(prev, curr) {return prev += curr.count}, 0);
	
	$scope.totalUpgrades = playerService.upgrades.length;
	$scope.possibleUpgrades = gameService.upgrades.length;

	$scope.totalAchievements = playerService.achievements.length;
	$scope.possibleAchievements = gameService.achievements.length;

	$scope.achievements = gameService.achievements;

	$scope.vcFunding = playerService.vcFunding;

	$scope.businessConnections = playerService.businessConnections;

	$scope.hasEarned = function(id) {
		return playerService.hasAchievement(id);
	}
};