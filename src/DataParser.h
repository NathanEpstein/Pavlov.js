#ifndef DATA_PARSER
#define DATA_PARSER

#include <vector>
#include <string>
#include <sstream>
#include <stdlib.h>

#include "DataStructures.h"

class DataParser {
  public:
    DataParser();
    observation parse_obs_line(const std::string &obs_string) const;

  private:
    std::vector<std::string> split(const std::string &s, char delim) const;
};

#endif
