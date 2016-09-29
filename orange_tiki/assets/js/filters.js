app.filter('specsFilter', function() {
    return function(products, filters) {

        // Tableau contenant les produits filtrés
        var filtered = [];

        // Pour chaque produit...
        angular.forEach(products, function(product) {

            var filtersMatches = 0;
            var filtersCount = 0;

            // Variable définissant si le produit qu'on teste est approuvé par les filtres
            angular.forEach(filters, function(filterGroup) {
                angular.forEach(filterGroup, function(filter, filterKey) {

                    if (typeof filter === 'object') {

                        var subFiltersMatches = 0;
                        var subFiltersCount = 0;

                        angular.forEach(filter, function(subFilter, subFilterKey) {
                            if (product.specifications[filterKey].values[subFilterKey] !== undefined) {
                                if (subFilter === true) {
                                    subFiltersMatches++;
                                }
                            }

                            subFiltersCount++;
                        });

                        if (subFiltersMatches === subFiltersCount) {
                            filtersMatches++;
                        }

                    } else if (typeof filter === 'boolean' || typeof filter === 'string') {
                        if (product.specifications[filterKey].values === filter) {
                            filtersMatches++;
                        }
                    }

                    filtersCount++;

                });
            });

            if (filtersMatches === filtersCount) {
                filtered.push(product);
            }

        });

        if (filtered.length > 0) {
            return filtered;
        } else {
            return products;
        }
    };
});

app.filter('specProductValue', function() {
    return function(spec) {

        if (typeof spec === 'string') {
            return spec;
        }

        if (typeof spec === 'boolean') {
            return (spec === true) ? "Oui" : "Non";
        }

        if (typeof spec === 'object') {
            var output = [];
            angular.forEach(spec, function(value) {
                output.push(value.label);
            });
            return output.join(", ");
        }

        return "N.C.";
    };
});